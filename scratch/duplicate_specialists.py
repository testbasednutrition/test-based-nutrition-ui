import re
import os

def main():
    filepath = "/Users/user/testbasedweb/test-based-nutrition-ui/src/data/specialists.ts"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the specialists array block
    # It starts with export const specialists: Specialist[] = [
    # and ends with ]; before export function getSpecialistBySlug
    pattern = r"(export const specialists: Specialist\[\] = \[\n)(.*?)(\n\];\n\nexport function getSpecialistBySlug)"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print("Could not find specialists array in file.")
        return

    prefix = match.group(1)
    array_content = match.group(2)
    suffix = match.group(3)

    # Duplication mapping 1
    replacements_1 = [
        ("dr-ishtiaq-rehman", "dr-faisal-rehman"), ("Dr. Ishtiaq Rehman", "Dr. Faisal Rehman"),
        ("jayden-blanchard", "julian-blanchard"), ("Jayden Blanchard", "Julian Blanchard"),
        ("neil-parsley", "nathan-parsley"), ("Neil Parsley", "Nathan Parsley"),
        ("mariusz-domasat", "marius-domasat"), ("Mariusz Domasat", "Marius Domasat"),
        ("sonny-hardy", "sam-hardy"), ("Sonny Hardy", "Sam Hardy"),
        ("mike-grundy", "marcus-grundy"), ("Mike Grundy", "Marcus Grundy"),
        ("ross-pearce", "ryan-pearce"), ("Ross Pearce", "Ryan Pearce"),
        ("lyndsey-hopper", "laura-hopper"), ("Lyndsey Hopper", "Laura Hopper"),
        ("william-todd", "wyatt-todd"), ("William Todd", "Wyatt Todd"),
        ("trevor-ford", "thomas-ford"), ("Trevor Ford", "Thomas Ford"),
        ("kia-porter", "kylie-porter"), ("Kia Porter", "Kylie Porter"),
        ("sally-butler", "samantha-butler"), ("Sally Butler", "Samantha Butler"),
        ("fiona-pursglove", "freya-pursglove"), ("Fiona Pursglove", "Freya Pursglove"),
        ("kimberly-whittall", "kiara-whittall"), ("Kimberly Whittall", "Kiara Whittall"),
        ("emily-holland", "ellie-holland"), ("Emily Holland", "Ellie Holland")
    ]

    # Duplication mapping 2
    replacements_2 = [
        ("dr-ishtiaq-rehman", "dr-tariq-rehman"), ("Dr. Ishtiaq Rehman", "Dr. Tariq Rehman"),
        ("jayden-blanchard", "jaden-blanchard"), ("Jayden Blanchard", "Jaden Blanchard"),
        ("neil-parsley", "nigel-parsley"), ("Neil Parsley", "Nigel Parsley"),
        ("mariusz-domasat", "mark-domasat"), ("Mariusz Domasat", "Mark Domasat"),
        ("sonny-hardy", "steve-hardy"), ("Sonny Hardy", "Steve Hardy"),
        ("mike-grundy", "matthew-grundy"), ("Mike Grundy", "Matthew Grundy"),
        ("ross-pearce", "richard-pearce"), ("Ross Pearce", "Richard Pearce"),
        ("lyndsey-hopper", "lisa-hopper"), ("Lyndsey Hopper", "Lisa Hopper"),
        ("william-todd", "wesley-todd"), ("William Todd", "Wesley Todd"),
        ("trevor-ford", "tyler-ford"), ("Trevor Ford", "Tyler Ford"),
        ("kia-porter", "keira-porter"), ("Kia Porter", "Keira Porter"),
        ("sally-butler", "sarah-butler"), ("Sally Butler", "Sarah Butler"),
        ("fiona-pursglove", "faith-pursglove"), ("Fiona Pursglove", "Faith Pursglove"),
        ("kimberly-whittall", "kristen-whittall"), ("Kimberly Whittall", "Kristen Whittall"),
        ("emily-holland", "evelyn-holland"), ("Emily Holland", "Evelyn Holland")
    ]

    block_1 = array_content
    for old, new in replacements_1:
        block_1 = block_1.replace(old, new)

    block_2 = array_content
    for old, new in replacements_2:
        block_2 = block_2.replace(old, new)

    new_array_content = array_content + ",\n" + block_1 + ",\n" + block_2
    new_content = content[:match.start()] + prefix + new_array_content + suffix + content[match.end():]

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

    print("Successfully expanded specialists in data file!")

if __name__ == "__main__":
    main()
