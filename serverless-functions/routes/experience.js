const { getAll } = require("../airtable");

exports.handler = async function(e) {
  if(e.httpMethod !== 'GET') return {statusCode: 405, body: JSON.stringify([])};

  const fields = ['company', 'role', 'image', 'description', 'startDate', 'endDate'];

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(await getAll('Experience', 'Main View', fields)),
      headers: {
        'access-control-allow-origin': '*',
        'cache-control': 's-maxage=120, immutable'
      }
    };
  } catch (error) {
    return {statusCode: 500, body: JSON.stringify([])};
  }
}