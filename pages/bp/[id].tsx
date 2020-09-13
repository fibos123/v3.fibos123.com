import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function IndexPage() {
  const router = useRouter()
  return (
    <Layout title="节点信息 | FIBOS 导航">
      {router.query.id} 节点详情
    </Layout>
  )
}
