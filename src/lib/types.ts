export type Catagories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    catagories: Catagories[]
    published: boolean
}
