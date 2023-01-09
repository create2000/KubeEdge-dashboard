import request from '@/utils/request';
import type { DeviceType } from './data.d';

// 列表
export function getList(namespaces: string) {
 return request(`/apis/devices.kubeedge.io/v1alpha2/namespaces/${namespaces}/devices`, {
  method: 'get'
 }) 
}
// 删除
export function removeItem(namespaces: string, app: string) {
  return request(`/apis/devices.kubeedge.io/v1alpha2/namespaces/${namespaces}/devices/${app}`, {
    method: 'delete',
  });
}
// 获取详情
export function getInfo(namespaces: string, app: string) {
  return request(`/apis/devices.kubeedge.io/v1alpha2/namespaces/${namespaces}/devices/${app}`, {
    method: 'get',
  });
}
// 设备实例新增
export async function addDevice(namespaces, params: DeviceType) {
  return request(`/apis/devices.kubeedge.io/v1alpha2/namespaces/${namespaces}/devices`, {
    method: 'post',
    data: params,
  });
}

// 设备模型列表
export function getDevicemodelsList(namespaces: string) {
  return request(`/apis/devices.kubeedge.io/v1alpha2/namespaces/${namespaces}/devicemodels`, {
   method: 'get'
  }) 
}

/** 获取边缘计算列表 */
export async function getNodes(options?: Record<string, any>) {
  return request('/v1/nodes', {
    method: 'get',
    ...(options || {}),
  });
}