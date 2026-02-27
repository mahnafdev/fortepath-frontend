"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SearchField, Select, ListBox, Label } from "@heroui/react";
import { useState } from "react";

interface Category {
	id: string;
	name: string;
	slug: string;
}

interface Props {
	initialSearch?: string;
	initialCategory?: string;
	categories: Category[];
}

export const TutorsFilters = ({
	initialSearch = "",
	initialCategory = "",
	categories,
}: Props) => {
	// Hooks
	const router = useRouter();
	const searchParams = useSearchParams();

	// States
	const [search, setSearch] = useState(initialSearch);
	const [category, setCategory] = useState(initialCategory);

	// Handle Filter and Search Changes
	const handleFilterAndSearch = (newSearch: string, newCategory: string) => {
		const params = new URLSearchParams(searchParams.toString());

		if (newSearch) params.set("search", newSearch);
		else params.delete("search");

		if (newCategory && newCategory !== "all") params.set("category", newCategory);
		else params.delete("category");

		router.replace(`/tutors?${params.toString()}`);
	};

	return (
		<div className="mb-12 flex items-end gap-4">
			{/* Search field */}
			<SearchField className="w-1/2">
				<SearchField.Group className="bg-zinc-800 rounded-lg">
					<SearchField.SearchIcon />
					<SearchField.Input
						className="text-base text-foreground placeholder-zinc-400"
						value={search}
						onChange={(e) => {
							const value = e.target.value;
							setSearch(value);
							handleFilterAndSearch(value, category);
						}}
						placeholder="Search..."
					/>
					<SearchField.ClearButton />
				</SearchField.Group>
			</SearchField>

			{/* Category filter */}
			<Select
				onChange={(value) => {
					setCategory(String(value));
					handleFilterAndSearch(search, String(value));
				}}
				className="w-1/2"
				placeholder="Select a category"
			>
				<Label className="text-base">Filter by Category</Label>
				<Select.Trigger className="bg-zinc-800 rounded-[10px] text-foreground">
					<Select.Value className="text-base" />
					<Select.Indicator />
				</Select.Trigger>
				<Select.Popover className="rounded-2xl bg-background h-120">
					<ListBox className="gap-0">
						<ListBox.Item
							key="all"
							id="all"
							textValue="all"
							className="text-base bg-background hover:bg-zinc-950 rounded-lg"
						>
							All Categories
						</ListBox.Item>
						{categories?.map((category) => (
							<ListBox.Item
								key={category.slug}
								id={category.slug}
								textValue={category.slug}
								className="text-base bg-background hover:bg-zinc-950 rounded-lg"
							>
								{category.name}
							</ListBox.Item>
						))}
					</ListBox>
				</Select.Popover>
			</Select>
		</div>
	);
};
