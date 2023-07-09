import { Container } from '../components/util/container'
import { Section } from '../components/util/section'
import { Tags } from '../components/tags'
import { client } from '../tina/__generated__/client'
import { Layout } from '../components/layout'
import Opengraph from '../components/util/opengraph'

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>['props']
) {
  const tags = props.data.postConnection.edges
  const pageTitle = 'Tags'

  return (
    <Layout>
      <Opengraph title={pageTitle} description={pageTitle} />
      <Section className="flex-1">
        <Container size="medium" width="small">
          <Tags data={tags} title={pageTitle} />
        </Container>
      </Section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.tagQuery()
  return {
    props: {
      ...tinaProps,
    },
  }
}

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any
