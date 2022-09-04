export interface Location
{
    manager_id: string;
    system_id: string;
    location_geolocation: {
        lat: string,
        lng: string
    };
    description: string;
    name: string;
    notes: string;
    communication_details: {
        phone: string;
        email: string;
    }
}