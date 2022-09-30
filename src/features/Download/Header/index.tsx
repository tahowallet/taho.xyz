import { css } from "linaria";
import React from "react";
import { bodyDarkGrey60, titleDarkHunterGreen } from "shared/styles/colors";
import { bodyNormalSegment24, titleQuincy80 } from "shared/styles/fonts";
import {
  sectionInlinePadding,
  sectionWideWidth,
  subtitleBlockMargin,
} from "shared/styles/lengths";

// Check UUID test
import {v4 as uuidv4} from 'uuid';

var retrievedUUID = localStorage.getItem('testUUID');

if (retrievedUUID) {
  console.log('retrieved UUID: ', retrievedUUID);
  document.cookie = "UUID=" + retrievedUUID;
  createEvent()
}

if (retrievedUUID === null)
{
  let myuuid = uuidv4();
  localStorage.setItem('testUUID', myuuid);
  document.cookie = "UUID=" + myuuid;
  console.log('new UUID set: ', myuuid);
  createEvent()
}


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

export async function createEvent(): Promise<HogResponse> {
  try {

    const response = await fetch("https://app.posthog.com/capture/", {
      method: "POST",
      body: JSON.stringify({
        // this is a safe public write only api key
        // roll this key for demo
        api_key: "phc_VzveyNxrn2xyiKDYn7XjrgaqELGeUilDZGiBVh6jNmh",
        event: "Download page - Erik",
        properties: {
          distinct_id: retrievedUUID,
          data:  "This is a test to storing event data into posthog",
          $lib: "http://localhost:8001/download",
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


export function DownloadHeader() {
  return (
    <div
      className={css`
        max-width: ${sectionWideWidth};
        padding: 0 ${sectionInlinePadding};
        margin: 0 auto;
        text-align: center;
      `}
    >
      <h1
        className={css`
          font: ${titleQuincy80};
          color: ${titleDarkHunterGreen};
        `}
      >
        Download now.
      </h1>
      <p
        className={css`
          margin: ${subtitleBlockMargin} 0;
          font: ${bodyNormalSegment24};
          color: ${bodyDarkGrey60};
        `}
      >
        A loyal friend for your favorite browser.
      </p>
    </div>
  );
}
