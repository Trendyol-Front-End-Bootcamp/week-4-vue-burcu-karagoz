import axios from 'axios';

import { fetchStarshipData, fetchSingleStarshipData, getPage, searchStarship } from "../../../src/services/index";

jest.mock("axios");

describe("Services", () => {
  axios.get.mockImplementation(() => {
    return Promise.resolve({
      data: {
        count: 36,
        next: "https://swapi.dev/api/starships/?page=3",
        previous: "https://swapi.dev/api/starships/?page=1",
        results: [
          {
            model: "CR90 corvette",
            name: "CR90 corvette",
            url: "https://swapi.dev/api/starships/2/"
          },
          {
            model: "Sentinel-class landing craft",
            name: "Sentinel-class landing craft",
            url: "https://swapi.dev/api/starships/5/"
          }
        ]
      }
    });
  });

  describe("fetchStarshipData", () => {
    it("should returns starships", async () => {
      expect(await fetchStarshipData()).toEqual(
        {
          count: 36,
          next: "https://swapi.dev/api/starships/?page=3",
          previous: "https://swapi.dev/api/starships/?page=1",
          results: [
            {
              model: "CR90 corvette",
              name: "CR90 corvette",
              url: "https://swapi.dev/api/starships/2/"
            },
            {
              model: "Sentinel-class landing craft",
              name: "Sentinel-class landing craft",
              url: "https://swapi.dev/api/starships/5/"
            }
          ]
        }
      );
    });

    it("should returns starships results lenght correctly", async () => {
      const data = await fetchStarshipData();

      expect(data.results).toHaveLength(2);
    });

    it("should return error message when data not arrived", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await fetchStarshipData()).toBe("network error");
    });
  });

  describe("getPage", () => {
    it("should returns starships", async () => {
      expect(await getPage()).toEqual(
        {
          count: 36,
          next: "https://swapi.dev/api/starships/?page=3",
          previous: "https://swapi.dev/api/starships/?page=1",
          results: [
            {
              model: "CR90 corvette",
              name: "CR90 corvette",
              url: "https://swapi.dev/api/starships/2/"
            },
            {
              model: "Sentinel-class landing craft",
              name: "Sentinel-class landing craft",
              url: "https://swapi.dev/api/starships/5/"
            }
          ]
        }
      );
    });

    it("should return error message when data not arrived", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await getPage()).toBe("network error");
    });
  });

  describe("searchStarship", () => {
    it("should returns starships", async () => {
      expect(await searchStarship()).toEqual(
        {
          count: 36,
          next: "https://swapi.dev/api/starships/?page=3",
          previous: "https://swapi.dev/api/starships/?page=1",
          results: [
            {
              model: "CR90 corvette",
              name: "CR90 corvette",
              url: "https://swapi.dev/api/starships/2/"
            },
            {
              model: "Sentinel-class landing craft",
              name: "Sentinel-class landing craft",
              url: "https://swapi.dev/api/starships/5/"
            }
          ]
        }
      );
    });

    it("should return error message when data not arrived", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await searchStarship()).toBe("network error");
    });
  });

  describe("fetchSingleStarshipData", () => {
    it("should returns starships", async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          data: {
            model: "CR90 corvette",
            name: "CR90 corvette",
            url: "https://swapi.dev/api/starships/2/"
          },
        });
      });

      const starship = await fetchSingleStarshipData(2);

      expect(starship).toEqual(
        {
          model: "CR90 corvette",
          name: "CR90 corvette",
          url: "https://swapi.dev/api/starships/2/"
        }
      );
    });

    it("should return error message when data not arrived", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await fetchSingleStarshipData()).toBe("network error");
    });
  });
});

