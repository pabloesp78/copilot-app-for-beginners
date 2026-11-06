import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BookFilters } from "../components/BookFilters";

describe("BookFilters", () => {
  it("provides descriptive accessible labels for each filter", () => {
    render(
      <BookFilters
        genres={["Fantasy"]}
        searchTerm=""
        selectedGenre="all"
        readingStatus="all"
        onSearchTermChange={() => {}}
        onGenreChange={() => {}}
        onReadingStatusChange={() => {}}
      />
    );

    expect(screen.getByRole("searchbox", { name: "Search books" })).toBeDefined();
    expect(screen.getByRole("combobox", { name: "Filter by genre" })).toBeDefined();
    expect(screen.getByRole("combobox", { name: "Reading status" })).toBeDefined();
  });
});
