export class FaceSnap {
    id: string;
    location?: string;

    constructor(
        public title: string,
        public description: string,
        public snapCount: number,
        public createdAt: Date,
        public image: string
    ) {
        this.id = crypto.randomUUID();
    }

    addSnap(): void {
        this.snapCount++;
    }

    removeSnap(): void {
        this.snapCount--;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): this { 
        this.setLocation(location);
        return this;
    }
}