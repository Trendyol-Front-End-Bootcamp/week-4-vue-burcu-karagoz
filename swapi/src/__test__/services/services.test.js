import axios from 'axios';

import { fetchStarshipData, fetchSingleStarshipData, getPage, searchStarship } from "../../services/index";

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
    });

    describe("searchStarships", () => {
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
    });
});