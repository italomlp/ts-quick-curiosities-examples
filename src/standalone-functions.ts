interface IResponse<T = unknown> {
  status: number;
  data: T; // do not use any
}

function getResponseData<T>(response: IResponse<T>): T {
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Failed to fetch response, status code: ${response.status}`);
  }
  
  return response.data;
}

const response = {
  status: 200,
  data: ['Hello', 'World'],
};
const data = getResponseData(response);
console.log(typeof data, data);
