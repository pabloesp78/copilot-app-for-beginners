import { describe, expect, it } from "vitest";
import { filterBooks, type BookFiltersState } from "../App";
import { books } from "../data/books";

const defaultFilters: BookFiltersState = {
  searchTerm: "",
  selectedGenre: "all",
  readingStatus: "all"
};

describe("filterBooks", () => {
  it("returns the same title results for uppercase and lowercase searches", () => {
    const lowercaseResults = filterBooks(books, {
      ...defaultFilters,
      searchTerm: "hobbit"
    });
    const uppercaseResults = filterBooks(books, {
      ...defaultFilters,
      searchTerm: "HOBBIT"
    });

    expect(lowercaseResults.map((book) => book.title)).toEqual(["The Hobbit"]);
    expect(uppercaseResults).toEqual(lowercaseResults);
  });

  it("matches author searches without depending on letter case", () => {
    const results = filterBooks(books, {
      ...defaultFilters,
      searchTerm: "TOLKIEN"
    });

    expect(results.map((book) => book.title)).toEqual(["The Hobbit"]);
  });

  it("filters by genre and reading status together", () => {
    const results = filterBooks(books, {
      ...defaultFilters,
      selectedGenre: "Fantasy",
      readingStatus: "unread"
    });

    expect(results.map((book) => book.title)).toEqual(["The Night Circus"]);
  });
});
