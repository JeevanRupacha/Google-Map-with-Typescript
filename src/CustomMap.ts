
export interface Mappable
{
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string
}

export class CustomMap
{
    private googleMap: google.maps.Map
    
    constructor(mapDivId: string)
    {
        this.googleMap = new google.maps.Map(
            document.getElementById(mapDivId),
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            }
        )
    }

    addMarker(mappalbe : Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappalbe.location.lat,
                lng: mappalbe.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappalbe.markerContent()
            })

            infoWindow.open(this.googleMap,marker)
        })
    }
}