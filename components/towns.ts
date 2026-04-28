export interface TownData {
    slug: string;
    name: string;
    fullName: string;
    county: string;
    distanceMin: number;
    direction: string;
    route: string;
    population: string;
    notable: string;
    nearbyTowns: { name: string; slug: string }[];
}

export const towns: Record<string, TownData> = {
    batesville: {
        slug: 'batesville',
        name: 'Batesville',
        fullName: 'Batesville, MS',
        county: 'Panola County',
        distanceMin: 25,
        direction: 'northwest',
        route: 'Highway 6 West to Interstate 55',
        population: 'about 7,400',
        notable: 'the Panola County seat and a regional retail hub for north-central Mississippi',
        nearbyTowns: [
            { name: 'Senatobia', slug: 'senatobia' },
            { name: 'Holly Springs', slug: 'holly-springs' },
            { name: 'Water Valley', slug: 'water-valley' },
        ],
    },
    'new-albany': {
        slug: 'new-albany',
        name: 'New Albany',
        fullName: 'New Albany, MS',
        county: 'Union County',
        distanceMin: 40,
        direction: 'east',
        route: 'Highway 30 East',
        population: 'about 8,800',
        notable: 'the Union County seat and the birthplace of William Faulkner',
        nearbyTowns: [
            { name: 'Tupelo', slug: 'tupelo' },
            { name: 'Pontotoc', slug: 'pontotoc' },
            { name: 'Holly Springs', slug: 'holly-springs' },
        ],
    },
    'water-valley': {
        slug: 'water-valley',
        name: 'Water Valley',
        fullName: 'Water Valley, MS',
        county: 'Yalobusha County',
        distanceMin: 25,
        direction: 'south',
        route: 'Highway 7 South',
        population: 'about 3,400',
        notable: 'the Yalobusha County seat with a tight-knit downtown and an annual Watermelon Carnival',
        nearbyTowns: [
            { name: 'Bruce', slug: 'bruce' },
            { name: 'Batesville', slug: 'batesville' },
        ],
    },
    'holly-springs': {
        slug: 'holly-springs',
        name: 'Holly Springs',
        fullName: 'Holly Springs, MS',
        county: 'Marshall County',
        distanceMin: 35,
        direction: 'north',
        route: 'Highway 7 North',
        population: 'about 7,800',
        notable: 'the Marshall County seat and home to Rust College',
        nearbyTowns: [
            { name: 'Senatobia', slug: 'senatobia' },
            { name: 'New Albany', slug: 'new-albany' },
            { name: 'Batesville', slug: 'batesville' },
        ],
    },
    pontotoc: {
        slug: 'pontotoc',
        name: 'Pontotoc',
        fullName: 'Pontotoc, MS',
        county: 'Pontotoc County',
        distanceMin: 50,
        direction: 'east',
        route: 'Highway 6 East to Highway 9',
        population: 'about 6,300',
        notable: 'the Pontotoc County seat and a historic Chickasaw settlement',
        nearbyTowns: [
            { name: 'Tupelo', slug: 'tupelo' },
            { name: 'New Albany', slug: 'new-albany' },
            { name: 'Bruce', slug: 'bruce' },
        ],
    },
    tupelo: {
        slug: 'tupelo',
        name: 'Tupelo',
        fullName: 'Tupelo, MS',
        county: 'Lee County',
        distanceMin: 60,
        direction: 'east',
        route: 'Highway 6 East to Highway 78 / I-22',
        population: 'about 38,000',
        notable: 'the Lee County seat, the birthplace of Elvis Presley, and the regional medical hub for northeast Mississippi',
        nearbyTowns: [
            { name: 'Pontotoc', slug: 'pontotoc' },
            { name: 'New Albany', slug: 'new-albany' },
            { name: 'Bruce', slug: 'bruce' },
        ],
    },
    bruce: {
        slug: 'bruce',
        name: 'Bruce',
        fullName: 'Bruce, MS',
        county: 'Calhoun County',
        distanceMin: 45,
        direction: 'southeast',
        route: 'Highway 6 East to Highway 9 South',
        population: 'about 1,800',
        notable: 'a small Calhoun County town in the heart of north Mississippi timber country',
        nearbyTowns: [
            { name: 'Water Valley', slug: 'water-valley' },
            { name: 'Pontotoc', slug: 'pontotoc' },
            { name: 'Tupelo', slug: 'tupelo' },
        ],
    },
    senatobia: {
        slug: 'senatobia',
        name: 'Senatobia',
        fullName: 'Senatobia, MS',
        county: 'Tate County',
        distanceMin: 55,
        direction: 'northwest',
        route: 'Highway 6 West to Interstate 55 North',
        population: 'about 8,200',
        notable: 'the Tate County seat and home to Northwest Mississippi Community College',
        nearbyTowns: [
            { name: 'Batesville', slug: 'batesville' },
            { name: 'Holly Springs', slug: 'holly-springs' },
        ],
    },
};

export const townList = Object.values(towns);
