import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const database = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((res, rej) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (
            title, imageUri, address, lat, lng 
        ) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          res(result);
        },
        (_, error) => {
          rej(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          const places = [];
          for (const db of result.rows._array) {
            places.push(
              new Place(
                db.title,
                db.imageUri,
                {
                  address: db.address,
                  lat: db.lat,
                  lng: db.lng,
                },
                db.id
              )
            );
          }
          resolve(places);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlaceDetails(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places WHERE id = ?",
        [id],
        (_, result) => {
          const dbPlace = result.rows._array[0];
          const place = new Place(
            dbPlace.title,
            dbPlace.imageUri,
            { lat: dbPlace.lat, lng: dbPlace.lng, address: dbPlace.address },
            dbPlace.id
          );
          resolve(place);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function deletePlace(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM places WHERE id = ?",
        [id],
        (_, result) => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

increment = (id) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE items SET count = count + 1 WHERE id = ?",
      [id],
      (txObj, resultSet) => {
        if (resultSet.rowsAffected > 0) {
          let newList = this.state.data.map((data) => {
            if (data.id === id) return { ...data, count: data.count + 1 };
            else return data;
          });
          this.setState({ data: newList });
        }
      }
    );
  });
};

export function updatePlace(place) {
  console.log(place.location.lat);
  const promise = new Promise((res, rej) => {
    database.transaction((tx) => {
      tx.executeSql(
        `UPDATE places SET title = ?, imageUri = ?, address = ?, lat = ?, lng = ? WHERE id = ?`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
          place.id,
        ],
        (_, result) => {
          console.log(result);
          res(result);
        },
        (_, error) => {
          // console.log(error);
          rej(error);
        }
      );
    });
  });
  return promise;
}
