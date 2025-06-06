import { shelly_component_id_t } from '../../ShellyComponents.js';
import { shelly_virtual_component_status_source_t } from '../Virtual.js';
import { shelly_service_key_t, shelly_service_role_t } from '../Service.js';

export type shelly_text_type_t = 'text';
export type shelly_text_key_t =
  `${shelly_text_type_t}:${shelly_component_id_t}`;

export type shelly_text_status_t = {
  source: shelly_virtual_component_status_source_t;
  value: string;
  last_update_ts: number;
};

export type shelly_text_config_t = {
  id: shelly_component_id_t;
  name: string | null;
  persisted: boolean;
  default_value: string;
  meta: null | Record<string, unknown>;
  max_len: number;
};

export type shelly_text_rpc_method_map_t = {
  'Text.GetStatus': {
    params:
      | {
          id: shelly_component_id_t;
        }
      | {
          role: shelly_service_role_t;
          owner: shelly_service_key_t;
        };
    result: shelly_text_status_t;
  };
  'Text.SetConfig': {
    params:
      | {
          id: shelly_component_id_t;
          config: shelly_text_config_t;
        }
      | {
          role: shelly_service_role_t;
          owner: shelly_service_key_t;
          config: shelly_text_config_t;
        };
    result: {
      restart_required: boolean;
    };
  };
  'Text.GetConfig': {
    params:
      | {
          id: shelly_component_id_t;
        }
      | {
          role: shelly_service_role_t;
          owner: shelly_service_key_t;
        };
    result: shelly_text_config_t;
  };
  'Text.Set': {
    params:
      | {
          id: shelly_component_id_t;
          value: string;
        }
      | {
          role: shelly_service_role_t;
          owner: shelly_service_key_t;
          value: string;
        };
    result: null;
  };
};
