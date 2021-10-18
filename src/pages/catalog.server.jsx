import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  renderToString,
} from "@react-pdf/renderer";
import gql from "graphql-tag";
import { useShopQuery, flattenConnection } from "@shopify/hydrogen";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 30,
    paddingTop: 70,
  },

  titlePageHeading: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
  },

  titlePageDate: {
    textAlign: "center",
    fontSize: 20,
  },

  section: {
    margin: "auto",
    padding: 10,
    paddingBottom: 50,
    flexGrow: 1,
    width: "70%",
  },

  title: {
    fontSize: 20,
    lineHeight: 1.5,
    width: "50%",
  },

  vendor: {
    fontSize: 10,
    paddingBottom: 10,
    borderBottom: "1px solid black",
    marginBottom: 20,
  },

  description: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

export default function Brochure({ response, handle }) {
  response.doNotStream();

  const { data } = useShopQuery({ query: QUERY });
  const products = flattenConnection(data.products);
  const productsMarkup = products.map((product) => {
    return (
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.vendor}>{product.vendor}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Image src={product.images.edges[0].node.originalSrc} />
        </View>
      </Page>
    );
  });
  const titlePageMarkup = (
    <Page size="A4" style={styles.page}>
      <Text style={styles.titlePageHeading}>Product Catalog</Text>
      <Text style={styles.titlePageDate}>{new Date().getFullYear()}</Text>
    </Page>
  );
  const BrochureDocument = () => (
    <Document>
      {titlePageMarkup}
      {productsMarkup}
    </Document>
  );

  response.headers.set("content-type", "application/pdf");

  return response.send(renderToString(<BrochureDocument />));
}

const QUERY = gql`
  query HomeQuery {
    products(first: 10) {
      edges {
        node {
          title
          description
          vendor
          images(first: 1, maxWidth: 400) {
            edges {
              node {
                originalSrc
              }
            }
          }
        }
      }
    }
  }
`;
