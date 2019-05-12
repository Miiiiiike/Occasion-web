import axios from 'axios';
const config = require('../../config')
const state = {
    reviews:[]
};

function getToken(){
    let token = localStorage.getItem('token')
        if(token == null || token ==''){ 
            this.goToLogin();            
        }
    return token;
}

const getters = {
    allReviews: (state) => state.reviews,
};

const actions = {
    async fetchReviews({ commit }){
        let token = localStorage.getItem('token')
        if(token == null || token ==''){ 
            this.goToLogin();            
        }else{
            // console.log(localStorage.getItem('token'))
            var header = {
                headers: {'Authorization': "bearer " + token}
            };

            const response = await axios.get(`${config.BACKEND_SERVER_IP}/reviews/forprovider`,header)
            commit('setReviews',response.data)

        }
    },

    async addBooking({ commit }, booking){
        let token = getToken();          
        var header = {
            headers: {'Authorization': "bearer " + token}
        };
        const response = await axios.post(`${config.BACKEND_SERVER_IP}/bookings`,booking, header);
        commit('newBooking',response.data);
    },

    async deleteBooking({ commit }, id){
        let token = getToken()
        // console.log(localStorage.getItem('token'))
        var header = {
            headers: {'Authorization': "bearer " + token}
        };
        await axios.delete(`${config.BACKEND_SERVER_IP}/bookings`,{data:{id:id}, headers: {'Authorization': "bearer " + token}})
        commit('removeBooking',id)
    },

    async filterBooking({ commit }, e){
        console.log(e);
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log(limit);

       const response =  await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setbookings',response.data)
    },

    async updateBooking({ commit }, updBooking){
       const response =  await axios.put(`http://jsonplaceholder.typicode.com/todos/${updBooking.id}`,updBooking);
       commit('updateTodo',updBooking)
    }
};

const mutations = {
    setReviews: (state,reviews) => (state.reviews = reviews),
    newBooking: (state, booking)=> state.bookings.unshift(booking),
    removeBooking: (state,id)=> {console.log("hello"); state.bookings = state.bookings.filter((booking)=> booking._id != id)},
    updateBooking: (state,updbooking)=>{
        const index = state.todos.findIndex(booking=>booking.id === updbooking.id)
        if(index !== -1){
            state.todos.splice(index,1,updbooking);
        }
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}