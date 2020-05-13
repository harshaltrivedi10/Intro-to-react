import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }
  //executes after render cycle
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    // The list on the end is a list of dependencies, on which the execution of useEffect depends
    // In use effect if you want the useEffect to be called just during the 1st
    // render cycle, use [] at the end. If you want useEffect to be called
    //  at every single change in the DOM, don't pass even an array!
    pet.breeds(animal).then(
      ({ breeds: apiBreeds }) => {
        const breedStrings = apiBreeds.map(({ name }) => name);
        //   Another way to fetch names
        //   const breedStrings = breeds.map((breedObject) => breedObject.name);
        setBreeds(breedStrings);
      },
      (error) => console.error(error)
    );
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
