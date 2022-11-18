/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  group(arg0: { nome: (string | import("@angular/forms").ValidatorFn)[]; email: (string | import("@angular/forms").ValidatorFn)[]; cpf: (string | import("@angular/forms").ValidatorFn)[]; senha: (string | import("@angular/forms").ValidatorFn)[]; confirma: (string | import("@angular/forms").ValidatorFn)[]; }) {
    throw new Error('Method not implemented.');
  }
  // criar storage 
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    //
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //
  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }
  // pega e retorna a informação
  public async get(key: string) {
    return await this._storage?.get(key);
  }

  public async delete(key: string) {
    await this._storage.remove(key);
  }


}
