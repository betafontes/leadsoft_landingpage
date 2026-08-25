import { DocumentStore, IDocumentStore } from 'ravendb';
import { env } from '../../config/env.js';

let _store: IDocumentStore | null = null;

export function getDocumentStore(): IDocumentStore {
  if (_store) return _store;

  _store = new DocumentStore(env.RAVENDB_URL, env.RAVENDB_DATABASE);
  _store.conventions.findCollectionNameForObjectLiteral = (entity: any) => {
    if (entity.collection) return entity.collection;
    return undefined;
  };
  _store.initialize();

  return _store;
}

export async function openSession() {
  const store = getDocumentStore();
  return store.openSession();
}
