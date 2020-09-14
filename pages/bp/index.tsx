import Layout from '../../components/Layout'
import { BpList } from '../../interfaces/BpList'
import { useEffect, useState } from 'react'
import Chain from "../../models/Chain";
import { Row as GlobalRow } from "../../interfaces/Global";
import { Row as ProducerRow } from "../../interfaces/Producer";
import { Row as ProducerJsonRow } from "../../interfaces/ProducerJson";

export default function IndexPage() {
  const card: any[] = []

  const [bpList, setBpList] = useState<BpList[]>([])
  useEffect(() => {
    async function fetchData() {
      const [producers, producerJson, global] = await Promise.all<ProducerRow[], ProducerJsonRow[], GlobalRow>([Chain.getProducers(), Chain.getProducerJson(), Chain.getGlobal()])
      const bpList = Chain.generateBpList(producers, producerJson, global)
      setBpList(bpList)
    };
    fetchData();
  }, [])

  return (
    <Layout title="节点列表 | FIBOS 导航">
      <div>
        <div className="px-6">
          <div className="text-2xl pb-4">节点列表</div>

          <div className="flex flex-wrap gap-4 text-center">
            {
              card.map(item =>
                <div key={item.name} className="flex-1 rounded bg-white p-4">
                  <h2 className="text-gray-600">{item.name}</h2>
                  <div className="text-lg h-6 whitespace-no-wrap">{item.value}</div>
                </div>
              )}
          </div>
        </div>
        <div className="px-6 bg-white mt-6">
          <div className="overflow-x-auto">
            <table className="w-full my-2">
              <thead>
                <tr>
                  <th
                    className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"
                  >#</th>
                  <th className="py-3 bg-gray-50 text-center text-xs text-gray-500 tracking-wider">节点标识</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider">节点名称</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider">状态</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider">得票率</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider">每日收益</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider">未领取收益</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider">网址</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">

                {
                  bpList.map((item, index) =>
                    <tr key={index} className="hover:bg-gray-200">
                      <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                      <td className="px-2 py-2 text-center">
                        {
                          item.logo &&
                          <span
                            className="h-12 w-12 block bg-cover mx-auto"
                            style={{ backgroundImage: 'url(' + item.logo + ')' }}
                          ></span>
                        }
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-900">{item.candidate_name}</div>
                        <div className="text-gray-500">{item.owner}</div>
                      </td>
                      <td className="px-6 py-4">
                        {
                          {
                            "active": <span
                              className="px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800"
                            >当选节点</span>,
                            "waiting": <span
                              className="px-2 inline-flex text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                            >待机节点</span>
                          }[(index + 1 <= 21) ? "active" : "waiting"]
                        }
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-900">{item.weight_percent} %</div>
                        <div className="text-gray-500 text-sm">{item.staked} FO</div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{item.claim_rewards_total} FO</td>
                      <td
                        className={"px-6 py-4 " + (item.claim_rewards_unreceived ? 'text-green-500 font-bold' : 'text-gray-500')}
                      >{item.claim_rewards_unreceived} FO</td>
                      <td className="px-6 py-4 text-gray-500">
                        <a
                          href={item.urlFull}
                          target="_blank"
                          className="text-indigo-500 hover:text-indigo-800 transition duration-150 ease-in-out"
                        >{item.urlSimple}</a>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={'/bp/' + item.owner}
                          className="text-indigo-500 hover:text-indigo-800 transition duration-150 ease-in-out"
                        >详情</a>
                      </td>
                    </tr>
                  )}
              </tbody >
            </table >
          </div >
        </div >
      </div >
    </Layout >
  )
}
