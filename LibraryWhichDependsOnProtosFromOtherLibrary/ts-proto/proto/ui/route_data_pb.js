// source: proto/ui/route_data.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var proto_some_some_pb = require('../../proto/some/some_pb.js');
goog.object.extend(proto, proto_some_some_pb);
goog.exportSymbol('proto.proto.ui.RouteDataProto', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ui.RouteDataProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ui.RouteDataProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ui.RouteDataProto.displayName = 'proto.proto.ui.RouteDataProto';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ui.RouteDataProto.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ui.RouteDataProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ui.RouteDataProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ui.RouteDataProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    displayTextLocalizationId: msg.getDisplayTextLocalizationId_asB64(),
    imageUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isInRoot: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    url: jspb.Message.getFieldWithDefault(msg, 5, ""),
    someTimestamp: (f = msg.getSomeTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    someProto: (f = msg.getSomeProto()) && proto_some_some_pb.SomeProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ui.RouteDataProto}
 */
proto.proto.ui.RouteDataProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ui.RouteDataProto;
  return proto.proto.ui.RouteDataProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ui.RouteDataProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ui.RouteDataProto}
 */
proto.proto.ui.RouteDataProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDisplayTextLocalizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInRoot(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSomeTimestamp(value);
      break;
    case 7:
      var value = new proto_some_some_pb.SomeProto;
      reader.readMessage(value,proto_some_some_pb.SomeProto.deserializeBinaryFromReader);
      msg.setSomeProto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ui.RouteDataProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ui.RouteDataProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ui.RouteDataProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ui.RouteDataProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDisplayTextLocalizationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsInRoot();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSomeTimestamp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSomeProto();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_some_some_pb.SomeProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ui.RouteDataProto.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.proto.ui.RouteDataProto.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.proto.ui.RouteDataProto.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ui.RouteDataProto} returns this
 */
proto.proto.ui.RouteDataProto.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes display_text_localization_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ui.RouteDataProto.prototype.getDisplayTextLocalizationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes display_text_localization_id = 2;
 * This is a type-conversion wrapper around `getDisplayTextLocalizationId()`
 * @return {string}
 */
proto.proto.ui.RouteDataProto.prototype.getDisplayTextLocalizationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDisplayTextLocalizationId()));
};


/**
 * optional bytes display_text_localization_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDisplayTextLocalizationId()`
 * @return {!Uint8Array}
 */
proto.proto.ui.RouteDataProto.prototype.getDisplayTextLocalizationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDisplayTextLocalizationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ui.RouteDataProto} returns this
 */
proto.proto.ui.RouteDataProto.prototype.setDisplayTextLocalizationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string image_url = 3;
 * @return {string}
 */
proto.proto.ui.RouteDataProto.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ui.RouteDataProto} returns this
 */
proto.proto.ui.RouteDataProto.prototype.setImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_in_root = 4;
 * @return {boolean}
 */
proto.proto.ui.RouteDataProto.prototype.getIsInRoot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ui.RouteDataProto} returns this
 */
proto.proto.ui.RouteDataProto.prototype.setIsInRoot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.proto.ui.RouteDataProto.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ui.RouteDataProto} returns this
 */
proto.proto.ui.RouteDataProto.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp some_timestamp = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.proto.ui.RouteDataProto.prototype.getSomeTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.proto.ui.RouteDataProto} returns this
*/
proto.proto.ui.RouteDataProto.prototype.setSomeTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ui.RouteDataProto} returns this
 */
proto.proto.ui.RouteDataProto.prototype.clearSomeTimestamp = function() {
  return this.setSomeTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ui.RouteDataProto.prototype.hasSomeTimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional proto.some.SomeProto some_proto = 7;
 * @return {?proto.proto.some.SomeProto}
 */
proto.proto.ui.RouteDataProto.prototype.getSomeProto = function() {
  return /** @type{?proto.proto.some.SomeProto} */ (
    jspb.Message.getWrapperField(this, proto_some_some_pb.SomeProto, 7));
};


/**
 * @param {?proto.proto.some.SomeProto|undefined} value
 * @return {!proto.proto.ui.RouteDataProto} returns this
*/
proto.proto.ui.RouteDataProto.prototype.setSomeProto = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ui.RouteDataProto} returns this
 */
proto.proto.ui.RouteDataProto.prototype.clearSomeProto = function() {
  return this.setSomeProto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ui.RouteDataProto.prototype.hasSomeProto = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.proto.ui);