import network from './_network.json';

export async function get() {
  return {
    body: {
      network
    },
  };
}