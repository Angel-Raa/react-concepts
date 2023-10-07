export const helpHttp = () => {
  const customFetch = async (endpoint, options) => {
    const defaultHeaders = {
      "Content-Type": "application/json",
      accept: "application/json",
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
    setTimeout(() => controller.abort(), 5000);
    return fetch(endpoint, options).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrión un error",
          })
    );
  };

  const get = async (url, options = {}) => {
    return await customFetch(url, options);
  };
  const post = async (url, options = {}) => {
    options.method = "POST";
    return await customFetch(url, options);
  };
  const put = async (url, options = {}) => {
    options.method = "PUT";
    return await customFetch(url, options);
  };
  const del = async (url, options = {}) => {
    options.method = "DELETE";
    return await customFetch(url, options);
  };

  const patch = async (url, options = {}) => {
    options.method = "PATCH";
    return await customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
    patch,
  };
};
