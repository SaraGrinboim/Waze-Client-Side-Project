export type Location = {
    manager_id: string,
    system_id: string,
    location: { lat: number, lng: number },
    description: string | undefined,
    name: string | undefined,
    notes: string | undefined,
    communication: string | undefined
}