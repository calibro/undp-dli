import network_fr from './_network_fr.json';
import network_ar from './_network_ar.json';

export async function get() {
  return {
    body: {
      networks:{
        ar: network_ar,
        fr: network_fr
      }
    },
  };
}