import { shelly_boolean_rpc_method_map_t } from './components/VirtualComponents/Boolean.js';
import { shelly_bthomedevice_rpc_method_map_t } from './components/BTHomeComponents/BTHomeDevice.js';
import { shelly_bthomesensor_rpc_method_map_t } from './components/BTHomeComponents/BTHomeSensor.js';
import { shelly_button_rpc_method_map_t } from './components/VirtualComponents/Button.js';
import { shelly_cover_rpc_method_map_t } from './components/Cover.js';
import { shelly_enum_rpc_method_map_t } from './components/VirtualComponents/Enum.js';
import { shelly_group_rpc_method_map_t } from './components/VirtualComponents/Group.js';
import { shelly_humidity_rpc_method_map_t } from './components/Humidity.js';
import { shelly_input_rpc_method_map_t } from './components/Input.js';
import { shelly_light_rpc_method_map_t } from './components/Light.js';
import { shelly_mqtt_rpc_method_map_t } from './components/MQTT.js';
import { shelly_number_rpc_method_map_t } from './components/VirtualComponents/Number.js';
import { shelly_script_rpc_method_map_t } from './components/Script.js';
import { shelly_service_rpc_method_map_t } from './components/Service.js';
import { shelly_switch_rpc_method_map_t } from './components/Switch.js';
import { shelly_sys_rpc_method_map_t } from './components/Sys.js';
import { shelly_temperature_rpc_method_map_t } from './components/Temperature.js';
import { shelly_text_rpc_method_map_t } from './components/VirtualComponents/Text.js';
import { shelly_wifi_rpc_method_map_t } from './components/WiFi.js';
import { shelly_device_rpc_method_map_t } from './components/Shelly.js';
import { shelly_object_rpc_method_map_t } from './components/VirtualComponents/Object.js';
import {
  shelly_component_helper_key_to_type_t,
  shelly_component_id_t,
  shelly_component_key_t,
  shelly_component_status_t,
} from './ShellyComponents.js';
import { shelly_pm1_rpc_method_map_t } from './components/PM1.js';
import { shelly_devicepower_rpc_method_map_t } from './components/DevicePower.js';
import { shelly_ethernet_rpc_method_map_t } from './components/Ethernet.js';
import { shelly_ble_rpc_method_map_t } from './components/BLE.js';
import { shelly_cloud_rpc_method_map_t } from './components/Cloud.js';
import { shelly_ws_rpc_method_map_t } from './components/WS.js';
import { shelly_matter_rpc_method_map_t } from './components/Matter.js';
import { shelly_modbus_rpc_method_map_t } from './components/Modbus.js';
import { shelly_voltmeter_rpc_method_map_t } from './components/Voltmeter.js';
import { shelly_smoke_rpc_method_map_t } from './components/Smoke.js';
import { shelly_dali_rpc_method_map_t } from './components/DALI.js';
import { shelly_cct_rpc_method_map_t } from './components/CCT.js';
import { shelly_zigbee_rpc_method_map_t } from './components/Zigbee.js';
import { shelly_em_rpc_method_map_t } from './components/EM.js';
import { shelly_em1_rpc_method_map_t } from './components/EM1.js';
import { shelly_emdata_rpc_method_map_t } from './components/EMData.js';
import { shelly_schedule_rpc_method_map_t } from './components/Schedule.js';
import { shelly_webhook_rpc_method_map_t } from './components/Webhook.js';
import { shelly_kvs_rpc_method_map_t } from './components/KVS.js';
import { shelly_knx_rpc_method_map_t } from './components/KNX.js';
import { shelly_virtual_rpc_method_map_t } from './components/Virtual.js';
import { shelly_bthome_rpc_method_map_t } from './components/BTHome.js';
import { shelly_em1data_rpc_method_map_t } from './components/EM1Data.js';
import { shelly_http_rpc_method_map_t } from './components/HTTP.js';
import { shelly_rgb_rpc_method_map_t } from './components/RGB.js';
import { shelly_rgbw_rpc_method_map_t } from './components/RGBW.js';

type shelly_rpc_method_map_t = shelly_device_rpc_method_map_t &
  shelly_sys_rpc_method_map_t &
  shelly_wifi_rpc_method_map_t &
  shelly_mqtt_rpc_method_map_t &
  shelly_switch_rpc_method_map_t &
  shelly_cover_rpc_method_map_t &
  shelly_light_rpc_method_map_t &
  shelly_service_rpc_method_map_t &
  shelly_number_rpc_method_map_t &
  shelly_boolean_rpc_method_map_t &
  shelly_text_rpc_method_map_t &
  shelly_enum_rpc_method_map_t &
  shelly_button_rpc_method_map_t &
  shelly_group_rpc_method_map_t &
  shelly_script_rpc_method_map_t &
  shelly_temperature_rpc_method_map_t &
  shelly_humidity_rpc_method_map_t &
  shelly_input_rpc_method_map_t &
  shelly_bthomesensor_rpc_method_map_t &
  shelly_bthomedevice_rpc_method_map_t &
  shelly_object_rpc_method_map_t &
  shelly_pm1_rpc_method_map_t &
  shelly_devicepower_rpc_method_map_t &
  shelly_ethernet_rpc_method_map_t &
  shelly_ble_rpc_method_map_t &
  shelly_cloud_rpc_method_map_t &
  shelly_ws_rpc_method_map_t &
  shelly_matter_rpc_method_map_t &
  shelly_modbus_rpc_method_map_t &
  shelly_voltmeter_rpc_method_map_t &
  shelly_smoke_rpc_method_map_t &
  shelly_dali_rpc_method_map_t &
  shelly_cct_rpc_method_map_t &
  shelly_zigbee_rpc_method_map_t &
  shelly_em_rpc_method_map_t &
  shelly_em1_rpc_method_map_t &
  shelly_emdata_rpc_method_map_t &
  shelly_schedule_rpc_method_map_t &
  shelly_webhook_rpc_method_map_t &
  shelly_kvs_rpc_method_map_t &
  shelly_knx_rpc_method_map_t &
  shelly_virtual_rpc_method_map_t &
  shelly_bthome_rpc_method_map_t &
  shelly_em1data_rpc_method_map_t &
  shelly_http_rpc_method_map_t &
  shelly_rgb_rpc_method_map_t &
  shelly_rgbw_rpc_method_map_t;

export type shelly_rpc_method_t = keyof shelly_rpc_method_map_t;

export type shelly_rpc_method_params_t<K extends shelly_rpc_method_t> =
  K extends keyof shelly_rpc_method_map_t
    ? shelly_rpc_method_map_t[K] extends { params: infer P }
      ? P
      : shelly_rpc_method_map_t[K] extends { params?: infer P }
        ? P | undefined
        : never
    : never;

export type shelly_rpc_method_result_t<K extends shelly_rpc_method_t> =
  K extends keyof shelly_rpc_method_map_t
    ? shelly_rpc_method_map_t[K] extends { result: infer R }
      ? R
      : unknown
    : unknown;

export type shelly_rpc_method_error_t = {
  code: number;
  message: string;
};

export type shelly_rpc_msg_request_t<K extends shelly_rpc_method_t = any> = {
  jsonrpc: '2.0';
  id: string | number;
  src: string;
  method: K;
  params: shelly_rpc_method_params_t<K>;
};

type shelly_rpc_msg_response_base_t = {
  id: string | number;
  src: string;
  dst: string;
  result: never;
  error: never;
};

export type shelly_rpc_msg_response_result_t<K extends shelly_rpc_method_t> =
  shelly_rpc_msg_response_base_t & {
    result: shelly_rpc_method_result_t<K>;
  };

export type shelly_rpc_msg_response_error_t = shelly_rpc_msg_response_base_t & {
  error: shelly_rpc_method_error_t;
};

export type shelly_rpc_msg_response_t<K extends shelly_rpc_method_t> =
  | shelly_rpc_msg_response_result_t<K>
  | shelly_rpc_msg_response_error_t;

export type shelly_rpc_notification_method_t =
  | 'NotifyStatus'
  | 'NotifyFullStatus'
  | 'NotifyEvent';

type shelly_rpc_notification_base_t = {
  src: string;
  dist: string;
  method: shelly_rpc_notification_method_t;
  params: unknown;
};

export type shelly_rpc_notification_notify_status_t =
  shelly_rpc_notification_base_t & {
    method: Extract<
      shelly_rpc_notification_method_t,
      'NotifyStatus' | 'NotifyFullStatus'
    >;
    params: {
      ts: number;
    } & {
      [K in shelly_component_key_t]?: Partial<
        shelly_component_status_t<shelly_component_helper_key_to_type_t<K>>
      >;
    };
  };

export type shelly_rpc_notification_notify_event_t =
  shelly_rpc_notification_base_t & {
    method: Extract<shelly_rpc_notification_method_t, 'NotifyEvent'>;
    params: {
      ts: number;
      events: {
        ts: number;
        component: shelly_component_key_t;
        id: shelly_component_id_t;
        event: string; // XXX:
      }[];
    };
  };

export type shelly_rpc_notification_t =
  | shelly_rpc_notification_notify_status_t
  | shelly_rpc_notification_notify_event_t;

export function isRpcResponse(data: any) {
  if (typeof data !== 'object' || Array.isArray(data) || data == null) {
    return false;
  }

  if (
    !Object.hasOwn(data, 'id') ||
    (typeof data.id !== 'string' && typeof data.id !== 'number')
  ) {
    return false;
  }

  if (!Object.hasOwn(data, 'src') || typeof data.src !== 'string') {
    return false;
  }

  if (!Object.hasOwn(data, 'dst') || typeof data.dst !== 'string') {
    return false;
  }

  return Object.hasOwn(data, 'result') || Object.hasOwn(data, 'error');
}

export function isRpcNotification(data: any) {
  if (typeof data !== 'object' || Array.isArray(data) || data == null) {
    return false;
  }

  if (!Object.hasOwn(data, 'src') || typeof data.src !== 'string') {
    return false;
  }

  if (!Object.hasOwn(data, 'dst') || typeof data.dst !== 'string') {
    return false;
  }

  if (!Object.hasOwn(data, 'method') || typeof data.method !== 'string') {
    return false;
  }

  if (!Object.hasOwn(data, 'params')) {
    return false;
  }

  return (
    data.method === 'NotifyStatus' ||
    data.method === 'NotifyFullStatus' ||
    data.method === 'NotifyEvent'
  );
}
