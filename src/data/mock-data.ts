// demo data.

import type { UserEntity, RoomEntity, ItemEntity, SessionEntity } from "@types";

export const dummyUsers = new Map<number, UserEntity>([
    [1, {
      id: 1,
      username: '配信者',
      image: '/images/users/1.png',
      mail: 'host@example.com',
      password: 'password',
    }],
    [2, {
      id: 2,
      username: '視聴者2',
      image: '/images/users/2.png',
      mail: 'audience2@example.com',
      password: 'password',
    }],
    [3, {
      id: 3,
      username: '視聴者3',
      image: '/images/users/3.png',
      mail: 'audience3@example.com',
      password: 'password',
    }],
    [4, {
      id: 4,
      username: '視聴者4',
      image: '/images/users/4.png',
      mail: 'audience4@example.com',
      password: 'password',
    }],
    [5, {
      id: 5,
      username: '視聴者5',
      image: '/images/users/5.png',
      mail: 'audience5@example.com',
      password: 'password',
    }],
  ]);
  
export const dummyRooms = new Map<number, RoomEntity>([
    [1, {
      id: 1,
      name: 'ルーム名1',
      description: 'ルーム説明1',
      image: '/images/rooms/1.png',
      organizer: dummyUsers.get(1)!,
    }],
  ]);
  
    // ダミーアイテムデータ（ベータ版用）
export const dummyItems = new Map<number, ItemEntity>([
    [1, {
      id: 1,
      name: 'Aurora Casual Handbag',
      description: 'オーロラに輝くカジュアルハンドバッグ・未使用',
      image: '/images/items/1.png',
      startingPrice: 5000,
      sessionDuration: 30,
    }],
    [2, {
      id: 2,
      name: 'Nice Sneaker',
      description: 'スニーカー・メンズ・サイズ9・未使用',
      image: '/images/items/2.png',
      startingPrice: 2000,
      sessionDuration: 30,
    }],
    [3, {
      id: 3,
      name: 'Another Sneaker',
      description: 'スニーカー・黒・未使用',
      image: '/images/items/3.png',
      startingPrice: 2500,
      sessionDuration: 30,
    }],
    [999, { // テスト用データ
      id: 999,
      name: 'テスト商品',
      description: 'これはテスト用のダミー商品です',
      image: '/images/thumbnail-02.jpeg',
      startingPrice: 1000,
      sessionDuration: 5,
    }]
  ]);
  
  export const dummySessionEntity: SessionEntity = {
    id: 1,
    item: dummyItems.get(1)!,
    currentPrice: 1000,
    startTime: Date.now(),
    endTime: Date.now() + 5 * 1000,
    isFinished: true,
    bids: [],
    winner: dummyUsers.get(2)!,
  }
  