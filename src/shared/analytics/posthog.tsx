import {v4 as uuidv4} from 'uuid';

export const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY

var retrievedUUID = localStorage.getItem('UUID');

interface HogEventProp {
  distinct_id: string
  data: string
}

export interface HogEvent {
  api_key: string
  event: string
  properties: {
    [key: string]: HogEventProp
  }
}

type HogResponse = {
  data: string
}

function getCookie(name)
 {
   var re = new RegExp(name + "=([^;]+)");
   var value = re.exec(document.cookie);
   return (value != null) ? unescape(value[1]) : null;
 }

export function posthogEvent(eventName:string) {
    //log to check if UUID is already present
    if (retrievedUUID) {
      console.log('retrieved UUID: ', retrievedUUID);
      document.cookie = "UUID=" + retrievedUUID;
      createEvent(eventName)
    }

    //If not present, generate a new one and put it in storage.
    if (retrievedUUID === null)
    {
      let myuuid = uuidv4();
      localStorage.setItem('UUID', myuuid);
      document.cookie = "UUID=" + myuuid;
      console.log('new UUID set: ', myuuid);
      createEvent(eventName)
    }
}

export async function createEvent(eventName:string): Promise<HogResponse> {
  try {

    var posthogEvent = eventName;

    const response = await fetch("https://app.posthog.com/capture/", {
      method: "POST",
      body: JSON.stringify({
        // this is a safe public write only api key
        // roll this key for demo
        api_key: POSTHOG_API_KEY,
        event: posthogEvent,
        properties: {
          distinct_id: retrievedUUID,
          data:  "TThis adds posthog events to Tally website",
          current_url: window.location.href,
          $lib: window.location.href,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`)
    }
    const result = (await response.json()) as HogResponse
    // eslint-disable-next-line no-console
    console.log("data: ", JSON.stringify(result, null, 4))
    console.log("UUID from cookie:", getCookie("UUID"))

    return result
  } catch (error) {
    if (error instanceof Error) {
      return Promise.reject(error.message)
    } // eslint-disable-next-line no-console
    return Promise.reject(console.log("unexpected error: "))
  }
}
