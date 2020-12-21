"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a message.
 */
var Message = /** @class */ (function () {
    function Message(message_id, date, chat, from, sender_chat, forward_from, forward_from_chat, forward_from_message_id, forward_signature, forward_sender_name, forward_date, reply_to_message, via_bot, edit_date, media_group_id, author_signature, text, entities, animation, audio, document, photo, sticker, video, video_note, voice, caption, caption_entities, contact, dice, game, poll, venue, location, new_chat_members, left_chat_member, new_chat_title, new_chat_photo, delete_chat_photo, group_chat_created, supergroup_chat_created, channel_chat_created, migrate_to_chat_id, migrate_from_chat_id, pinned_message, invoice, successful_payment, connected_website, passport_data, proximity_alert_triggered, reply_markup) {
        this.message_id = message_id;
        this.date = date;
        this.chat = chat;
        this.from = from;
        this.sender_chat = sender_chat;
        this.forward_from = forward_from;
        this.forward_from_chat = forward_from_chat;
        this.forward_from_message_id = forward_from_message_id;
        this.forward_signature = forward_signature;
        this.forward_sender_name = forward_sender_name;
        this.forward_date = forward_date;
        this.reply_to_message = reply_to_message;
        this.via_bot = via_bot;
        this.edit_date = edit_date;
        this.media_group_id = media_group_id;
        this.author_signature = author_signature;
        this.text = text;
        this.entities = entities;
        this.animation = animation;
        this.audio = audio;
        this.document = document;
        this.photo = photo;
        this.sticker = sticker;
        this.video = video;
        this.video_note = video_note;
        this.voice = voice;
        this.caption = caption;
        this.caption_entities = caption_entities;
        this.contact = contact;
        this.dice = dice;
        this.game = game;
        this.poll = poll;
        this.venue = venue;
        this.location = location;
        this.new_chat_members = new_chat_members;
        this.left_chat_member = left_chat_member;
        this.new_chat_title = new_chat_title;
        this.new_chat_photo = new_chat_photo;
        this.delete_chat_photo = delete_chat_photo;
        this.group_chat_created = group_chat_created;
        this.supergroup_chat_created = supergroup_chat_created;
        this.channel_chat_created = channel_chat_created;
        this.migrate_to_chat_id = migrate_to_chat_id;
        this.migrate_from_chat_id = migrate_from_chat_id;
        this.pinned_message = pinned_message;
        this.invoice = invoice;
        this.successful_payment = successful_payment;
        this.connected_website = connected_website;
        this.passport_data = passport_data;
        this.proximity_alert_triggered = proximity_alert_triggered;
        this.reply_markup = reply_markup;
    }
    return Message;
}());
exports.default = Message;
