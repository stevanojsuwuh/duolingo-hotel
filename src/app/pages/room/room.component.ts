import { Component, OnInit } from '@angular/core';
import { Room } from './model/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  roomShow: Room[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.showRoom();
      this.loading = false;
    }, 1000);
    this.listRoom()
  }

  showRoom(): void {
    this.roomShow = [
      {
        id: 1,
        name: 'ROOM 101',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg'
      },
      {
        id: 2,
        name: 'ROOM 102',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      },
      {
        id: 3,
        name: 'ROOM 103',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png'
      },
    ]
  }

  listRoom(): void {
    this.rooms = [
      {
        id: 1,
        name: 'ROOM 101',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg'
      },
      {
        id: 2,
        name: 'ROOM 102',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      },
      {
        id: 3,
        name: 'ROOM 103',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png'
      },
      {
        id: 4,
        name: 'ROOM 201',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-videoSixteenByNineJumbo1600.jpg'
      },
      {
        id: 5,
        name: 'ROOM 202',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://vwartclub.com/media/projects/3322/1.jpg'
      },
      {
        id: 6,
        name: 'ROOM 203',
        description: 'ruangan yang nyaman',
        price: 'Rp. 80.000',
        cover: 'https://i.pinimg.com/originals/30/6a/f3/306af3bc7c6ab631736ee2a660f28a3f.jpg'
      },
    ]
  }

  loadMore(): void {
    this.loading = true;
    let loadData = this.roomShow.length + 3;
    if (loadData > this.rooms.length) {
      loadData = this.rooms.length
    }
    setTimeout(() => {
      this.roomShow = this.rooms.slice(0, loadData);
      this.loading = false;
    }, 2000);
  }

}
