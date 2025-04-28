"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = void 0;
const prisma_1 = require("../../../generated/prisma");
const library_1 = require("@prisma/client/runtime/library");
const prisma = new prisma_1.PrismaClient();
class UserDetails {
    constructor(userData) {
        this.id = userData.id;
        this.name = userData.name;
        this.email = userData.email;
        this.team = userData.team || {};
        this.createdAt = userData.createdAt || new Date().toISOString();
        this.updatedAt = userData.updatedAt || new Date().toISOString();
        this.Zaps = userData.Zaps || {};
        this.tokens = userData.tokens;
    }
    static async getUser(userId) {
        try {
            if (UserDetails.cacheCreatedAt &&
                (Date.now() - UserDetails.cacheCreatedAt) < UserDetails.cacheTimeout * 1000 &&
                UserDetails.instance &&
                UserDetails.instance.id === userId) {
                return UserDetails.instance;
            }
            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: { team: {
                        include: {
                            apps: {
                                include: {
                                    actions: true,
                                    authMethods: true,
                                    triggers: true,
                                }
                            },
                        },
                    }, zaps: true, tokens: true
                },
            });
            if (!user)
                throw new Error("User details not found");
            UserDetails.instance = new UserDetails({
                id: user.id,
                name: user.name,
                email: user.email,
                team: user.team || {},
                Zaps: user.zaps || [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                tokens: user.tokens
            });
            UserDetails.cacheCreatedAt = Date.now();
            console.log("User details fetched and cached successfully.");
            return UserDetails.instance;
        }
        catch (e) {
            if (e instanceof library_1.PrismaClientKnownRequestError) {
                throw new Error("Prisma error:" + e.code + " : " + e.message);
            }
            console.error("Error fetching user details:", e);
            throw new Error("Failed to fetch user details");
        }
    }
    static setUser(data) {
        try {
            UserDetails.instance = new UserDetails(data);
            UserDetails.cacheCreatedAt = Date.now();
            console.log("User details set and cache updated.");
        }
        catch (e) {
            console.error("Error setting user details:", e);
        }
    }
    static async updateUserDetails(userId) {
        console.log("Updating user details and clearing cache...");
        UserDetails.instance = null;
        UserDetails.cacheCreatedAt = null;
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { team: true, zaps: true, tokens: true },
        });
        if (!user)
            throw new Error("User details not found");
        UserDetails.instance = new UserDetails({
            id: user.id,
            name: user.name,
            email: user.email,
            team: user.team || {},
            Zaps: user.zaps || [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            tokens: user.tokens
        });
        UserDetails.cacheCreatedAt = Date.now();
        console.log("User details updated successfully.");
    }
}
exports.UserDetails = UserDetails;
UserDetails.instance = null;
UserDetails.cacheTimeout = 86400;
UserDetails.cacheCreatedAt = null;
//# sourceMappingURL=UserSession.js.map