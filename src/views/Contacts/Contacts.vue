<template>
    <div class="contact-page tella-page">
        <div class="tella-navigation">
            <tella-navigation></tella-navigation>
        </div>
        <div class="contact tella-content">
            <div class="contact_text">
                <div class="contact_title">
                    <h5 class="colored-text">
                        {{$t('contacts')}}
                    </h5>
                    <h1>{{$t('lets_talk')}}</h1>
                </div>
                <div class="contact_address">
                    <tella-address></tella-address>
                </div>
            </div>
            <div class="contact-map_container">
                <div class="contact_map" id="map" ref="map"></div>
                <router-link to="/request" class="contact_map-button">
                    <span>
                        {{$t('send_request')}}
                    </span>
                </router-link>
            </div>
        </div>
        <div class="tella-footer">
            <tella-footer isContacts></tella-footer>
        </div>
    </div>
</template>
<script>
import "./contacts.scss";
export default {
    data(){
        return {
            map: '',
            latLng: {
                lat: 43.204666, 
                lng: 76.915911
            },
            marker: ''
        }
    },
    mounted(){
        this.initMap();
    },
    methods:{
        initMap(){
            // eslint-disable-next-line
            this.map = new google.maps.Map(this.$refs.map, {
                center: this.latLng,
                disableDefaultUI: true,
                // scrollwheel: false,
                zoom: 17,
                gestureHandling: 'greedy',  
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    }
                ]
            });
            // eslint-disable-next-line
            this.marker = new google.maps.Marker({
                position: this.latLng,
                map: this.map,
                title: 'meta. digital'
            });
        }
    }
};
</script>
