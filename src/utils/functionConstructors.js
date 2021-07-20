import { dateFormatter } from './dateFormatter';

const EventFormData = function (event) {
    this.name = event.name;
    this.description = event.description;
    this.dateStart = event.dateStart?.slice(0, -5) || new Date();
    this.dateEnd = event.dateEnd?.slice(0, -5) || new Date();
    this.imageupload = event.imageupload;
    this.isPublic = event.isPublic === "1" ? true : false
    this.price = event.price || 0;
    this.category = event.category;
}

const VenueFormData = function (venue) {
    this.venueName = venue.venueName;
    this.venueId = venue.venue_Id;
    this.address = venue.address;
    this.city = venue.city;
    this.country = venue.country;
}

const UserFormData = function (user) {
    this.first_name = user.first_name || '';
    this.last_name = user.last_name || '';
    this.bio = user.bio || '';
    this.birth_date = user.birth_date || dateFormatter(new Date());
    this.address = user.address || '';
    this.city = user.City || 'None';
    this.country = user.Country || 'None';
}

const initialValuesBuilder = function (bigObject) {
    if (!bigObject) return {
        name: '',
        category: '',
        description: '',
        price: 0,
        isPublic: false,
        dateStart: new Date(),
        dateEnd: new Date(),
        imageupload: null,
        country: 'None',
        city: 'None',
        cities: [],
        venueId: '',
        venueName: '',
        address: ''
    };
    let eventData = new EventFormData(bigObject);
    let venueData = new VenueFormData(bigObject);
    return {
        cities: [],
        ...eventData,
        ...venueData,
    }
}

const initialValuesUser = function (bigObject) {
    if (!bigObject) return {
        first_name: '',
        last_name: '',
        bio: '',
        birth_date: new Date(),
        address: '',
        city: 'None',
        country: 'None'
    };
    return {
        cities: [],
        ...new UserFormData(bigObject)
    }

}

export { initialValuesBuilder, initialValuesUser };