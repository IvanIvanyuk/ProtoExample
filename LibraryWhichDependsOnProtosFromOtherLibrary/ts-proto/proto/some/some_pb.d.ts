import * as jspb from "google-protobuf"

export class SomeProto extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): SomeProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SomeProto.AsObject;
  static toObject(includeInstance: boolean, msg: SomeProto): SomeProto.AsObject;
  static serializeBinaryToWriter(message: SomeProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SomeProto;
  static deserializeBinaryFromReader(message: SomeProto, reader: jspb.BinaryReader): SomeProto;
}

export namespace SomeProto {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

