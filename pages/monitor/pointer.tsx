import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { PointerList } from '../../interfaces/PointerList'
import Pointer from '../../models/Pointer';
import _ from 'lodash'
import utils from '../../utils';
import ReactJson from 'react-json-view'
import Link from 'next/link'

interface AccessPoints {
  "p2p-peer-address": string[],
  "http-api-address": string[],
  "https-api-address": string[]
}

export default function IndexPage() {
  const [accessPoints, setAccessPoints] = useState<object>()
  const [pointerList, setPointerList] = useState<PointerList[]>([])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {

    const pointer = new Pointer();
    pointer.getProducerJson();

    async function fetchData() {
      const data = pointer.list
      setPointerList(data)
      let accessPoints: AccessPoints = {
        "p2p-peer-address": [],
        "http-api-address": [],
        "https-api-address": [],
      };
      const successList = data.filter(
        (item) => item.status === "success"
      );
      accessPoints["p2p-peer-address"] = _.union(successList
        .filter((item) => item.p2p_endpoint)
        .map((item) => item.p2p_endpoint));

      accessPoints["http-api-address"] = _.union(successList
        .filter((item) => item.api_endpoint)
        .map((item) => item.api_endpoint));

      accessPoints["https-api-address"] = _.union(successList
        .filter((item) => item.ssl_endpoint)
        .map((item) => item.ssl_endpoint))

      setAccessPoints(accessPoints)
    };
    fetchData();
    let timer = setInterval(fetchData, 100);
    return () => clearInterval(timer);
  }, [])

  return (
    <Layout title="节点监控 | FIBOS 导航">
      <div>
        <div className="px-6">
          <div className="pb-4">
            <Link href="/monitor">
              <a
                href="/monitor"
                className="text-indigo-500 transition duration-150 ease-in-out bg-white py-2 px-4 rounded hover:bg-indigo-500 hover:text-white"
              >出块节点在线状态</a>
            </Link>
            <Link href="/monitor/pointer">
              <a
                href="/monitor/pointer"
                className="ml-4 bg-indigo-500 transition duration-150 ease-in-out text-white py-2 px-4 rounded cursor-default"
              >接入点状态监测</a>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="text-2xl">接入点状态监测</div>
            <a
              className="text-indigo-500 hover:text-indigo-800 transition duration-150 ease-in-out cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >可用接入点列表</a>
          </div>

          <div className="px-6 bg-white mt-4">
            <div className="overflow-x-auto">
              <table className="w-full my-2">
                <thead>
                  <tr>
                    <th>#</th>
                    <th >节点账户</th>
                    <th>HTTPS 状态</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {
                    pointerList.map((item, index) =>
                      <tr
                        key={index}
                        className="hover:bg-gray-200"
                      >
                        <td className=" text-gray-500">{index + 1}</td>
                        <td >
                          <div className="flex items-center">
                            <div className="text-gray-900">{item.owner}</div>
                          </div>
                        </td>
                        <td >
                          {
                            {
                              "waiting": <span
                                className="px-2 inline-flex text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                              >获取中</span>,
                              "success": <span
                                className="px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800"
                              >{utils.formatNumber(item.number)} ( {item.version} )</span>,
                              "fail": <span
                                className="px-2 inline-flex text-xs font-semibold rounded-full bg-red-100 text-red-800"
                              >无法访问</span>,
                              "notset": <span
                                className="px-2 inline-flex text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                              >未设置</span>
                            }[item.status]
                          }
                          {
                            item.status !== 'notset' &&
                            <a
                              target="_blank"
                              href={item.ssl_endpoint + '/v1/chain/get_info'}
                              className="ml-4 text-indigo-500"
                              title="打开新窗口查看接入点"
                            >
                              <i className="fas fa-link"></i>
                            </a>
                          }
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div >

        <div className={"fixed z-10 inset-0 overflow-y-auto " + (isOpen ? 'block' : 'hidden')} >
          <div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white px-4 pt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900 pb-2">可用接入点列表</h3>
                <div className="sm:flex sm:items-start">
                  <pre className="h-64 w-full overflow-auto text-sm">
                    {accessPoints !== undefined && <ReactJson src={accessPoints} displayDataTypes={false}  />}
                  </pre>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => setIsOpen(!isOpen)}
                  >关闭</button>
                </span>
              </div>
            </div>
          </div>
        </div >
      </div >
    </Layout >
  )
}
