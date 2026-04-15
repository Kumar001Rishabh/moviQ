import Joi from 'joi';
import BaseDto from '../../../common/dto/base.dto.js';

class authDto extends BaseDto {
    static schema = Joi.object({
        username: Joi.string().min(3).max(255).required(),
        password: Joi.string().required()
    });
};

export default authDto;