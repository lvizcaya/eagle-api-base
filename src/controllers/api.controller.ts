import { Request, Response } from "express";
import { msgSuccess } from "../helpers/status";

const example = async (req: Request, res: Response): Promise<Response> => {
    return res.status(msgSuccess.EXAMPLE_SUCCESS.code).json(msgSuccess.EXAMPLE_SUCCESS.message);
};

export {
    example
}
