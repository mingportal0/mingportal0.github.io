import { Container } from '../components/util/container'
import { Section } from '../components/util/section'
import { Posts } from '../components/posts'
import { client } from '../tina/__generated__/client'
import { Layout } from '../components/layout'
import Opengraph from '../components/util/opengraph'

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>['props']
) {
  const posts = props.data.postConnection.edges.slice(0, 5)
  const mainTitle = 'Main'

  return (
    <Layout>
      <Opengraph title={mainTitle} description={mainTitle} isMainPage={true} />
      <Section className="flex-1">
        <Container size="small" width="small">
          <Posts data={posts} title="Latest Posts" searchYn={false} />
        </Container>
      </Section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.pageQuery()
  return {
    props: {
      ...tinaProps,
    },
  }
}

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any
