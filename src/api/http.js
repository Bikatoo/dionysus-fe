import axios from "axios"; // 引用axios
import config from "@/api/config";
import { removeToken } from '@/utils/auth'

const instance = axios.create({
  baseURL: config.baseUrl.dev,
  withCredentials: true,
  timeout: 60000,
});
//get请求
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response);
        if (response.data.code && response.data.code === 401) {
          removeToken()
          // location.reload()
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

//下载型get请求
export function getAndDown(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params,
      }, {
        responseType: "arraybuffer"
      })
      .then((response) => {
        resolve(response);
        if (response.data.code && response.data.code === 401) {
          removeToken()
          // location.reload()
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

//post请求
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      (response) => {
        resolve(response.data);
        if (response.data.code && response.data.code === 401) {
          removeToken()
          // location.reload()
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
}

//put 请求
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(
      (response) => {
        resolve(response.data);
        if (response.data.code && response.data.code === 401) {
          removeToken()
          // location.reload()
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
}

//DELETE 请求
export function del(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.delete(url, data).then(
      (response) => {
        resolve(response.data);
        if (response.data.code && response.data.code === 401) {
          removeToken()
          // location.reload()
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
}