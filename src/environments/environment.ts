export const environment = {
    production: false,
    apiUrl: 'http://localhost:5560/api/',
    keys: {
        token: 'TOKEN',
        userProfile: 'USER_PROFILE'
    },
    endpoints: {
        vehicles: {
            controller: 'Vehicles',
            getVehicles: 'GetVehicles',
            getVehicleById: 'GetVehicle'
        },
        users: {
            controller: 'Auth',
            getAllUsers: 'GetAllUsers'
        }
    }
};