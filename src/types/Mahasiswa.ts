export interface Mahasiswa {
  namaMhs: string;
  npmMhs: string;
}

export interface AppState {
  header: string;
  value: boolean;
  username: string;
  dataMahasiswa: Mahasiswa[];
}
