const getData = async (url, functionToEjecute, functionToFailed) => {
  try {
    const resp = await fetch(url);
    let error = { err: true, status: resp.status, statusText: resp.statusText };
    if (!resp.ok) throw error;
    const data = await resp.json();
    functionToEjecute(data);
  } catch (error) {
    functionToFailed(error);
  }
};

const moveElement = async (dataToState) => {
  const { data, nameTo } = dataToState;
  try {
    let options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        ...data,
        status: nameTo || 'attend',
      }),
    };
    let url = 'https://agende-88be8-default-rtdb.firebaseio.com/reserves';
    await fetch(`${url}/${data.id - 1}.json`, options);
  } catch (error) {}
};

const moveElementToCancel = async (dataToState) => {
  const { data } = dataToState;
  try {
    let options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        ...data,
        status: 'canceled',
      }),
    };
    let url = 'http://localhost:5555/reserves';
    await fetch(`${url}/${data.id}`, options);
  } catch (error) {}
};

export const useFetch = {
  getData,
  moveElement,
  moveElementToCancel,
};
