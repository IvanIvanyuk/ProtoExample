import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as proto_some_some_pb from '../../proto/some/some_pb';

export class RouteDataProto extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): RouteDataProto;

  getDisplayTextLocalizationId(): Uint8Array | string;
  getDisplayTextLocalizationId_asU8(): Uint8Array;
  getDisplayTextLocalizationId_asB64(): string;
  setDisplayTextLocalizationId(value: Uint8Array | string): RouteDataProto;

  getImageUrl(): string;
  setImageUrl(value: string): RouteDataProto;

  getIsInRoot(): boolean;
  setIsInRoot(value: boolean): RouteDataProto;

  getUrl(): string;
  setUrl(value: string): RouteDataProto;

  getSomeTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSomeTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): RouteDataProto;
  hasSomeTimestamp(): boolean;
  clearSomeTimestamp(): RouteDataProto;

  getSomeProto(): proto_some_some_pb.SomeProto | undefined;
  setSomeProto(value?: proto_some_some_pb.SomeProto): RouteDataProto;
  hasSomeProto(): boolean;
  clearSomeProto(): RouteDataProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteDataProto.AsObject;
  static toObject(includeInstance: boolean, msg: RouteDataProto): RouteDataProto.AsObject;
  static serializeBinaryToWriter(message: RouteDataProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteDataProto;
  static deserializeBinaryFromReader(message: RouteDataProto, reader: jspb.BinaryReader): RouteDataProto;
}

export namespace RouteDataProto {
  export type AsObject = {
    id: Uint8Array | string,
    displayTextLocalizationId: Uint8Array | string,
    imageUrl: string,
    isInRoot: boolean,
    url: string,
    someTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    someProto?: proto_some_some_pb.SomeProto.AsObject,
  }
}

