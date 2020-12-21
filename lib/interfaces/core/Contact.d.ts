/**
 * This object represents a phone contact.
 */
export default interface Contact {
    /**
     * Contact's phone number
     */
    phone_number: string;
    /**
     * Contact's first name
     */
    first_name: string;
    /**
     * Optional. Contact's last name
     */
    last_name?: string;
    /**
     * Optional. Contact's user identifier in Telegram
     */
    user_id?: number;
    /**
     * Optional. Additional data about the contact in the form of a vCard
     */
    vcard?: string;
}
