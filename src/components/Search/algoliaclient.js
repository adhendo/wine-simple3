import algoliasearch from 'algoliasearch';

const ALGOLIA_APP_ID = 'AQDO18OGM9';
const ALGOLIA_API_KEY = 'cac2170e37f189e7c48fc966311be8b5';

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY, {
  protocol: 'https:'
});
const index = client.initIndex('wineries');

export default index;