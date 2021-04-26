import {visualisations} from './_visualisations.json';

export async function get() {
    return {
      body: {
        visualisations
      },
    };
  }