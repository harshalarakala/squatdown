// src/utils/fetchPreForeclosures.ts
export const fetchPreForeclosures = async () => {
    const apiKey = '2b1e86b638620bf2404521e6e9e1b19e';
    const endpoint = 'https://api.gateway.attomdata.com/propertyapi/v1.0.0/foreclosure/preforeclosuredetails';
  
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
          'Accept': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  