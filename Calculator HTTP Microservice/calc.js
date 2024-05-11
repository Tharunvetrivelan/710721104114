const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1NDIxMzI4LCJpYXQiOjE3MTU0MjEwMjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI2NWI4ODk2LTBiMTctNDNlZS04Y2IyLTFiNGU1MDA5ZGQ4YSIsInN1YiI6InRoYXJ1bnZldHJpdmVsYW5AZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIyNjViODg5Ni0wYjE3LTQzZWUtOGNiMi0xYjRlNTAwOWRkOGEiLCJjbGllbnRTZWNyZXQiOiJJaG1TZGtvYkRySUtTT01GIiwib3duZXJOYW1lIjoiUmFodWwiLCJvd25lckVtYWlsIjoidGhhcnVudmV0cml2ZWxhbkBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTA3MjExMDQxMTQifQ.7oEy7wRHSBb_qSy0zlfK_AcY_FVSvCiLvfIpu5E0-lo";

const apiEndpoints = {
  prime: "http://20.244.56.144/test/numbers/p",
  fibonacci: "http://20.244.56.144/test/fibo",
  even: "http://20.244.56.144/test/even",
  random: "http://20.244.56.144/test/rand"
};

async function fetchDataAndAnalyze(numberType) {
  try {
    const response = await fetch(apiEndpoints[numberType], {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error for ${numberType}! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Data for ${numberType.toUpperCase()} numbers:`);
    console.log("Previous Window State:", data.windowPrevState);
    console.log("Current Window State:", data.windowCurrState);
    console.log("Numbers from API:", data.numbers);
    console.log("Average:", data.avg);

  } catch (error) {
    console.error(`Error fetching or analyzing ${numberType} data:`, error);
  }
}


for (const numberType in apiEndpoints) {
  fetchDataAndAnalyze(numberType);
}
