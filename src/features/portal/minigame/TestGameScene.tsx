import mapJson from "assets/map/crossy_map.json";
import { SceneId } from "features/world/mmoMachine";
import { BaseScene, NPCBumpkin } from "features/world/scenes/BaseScene";
import { MachineInterpreter } from "./lib/portalMachine";

export class TestGameScene extends BaseScene {
  sceneId: SceneId = "crossy_game";
  constructor() {
    super({
      name: "crossy_game",
      map: {
        json: mapJson,
      },
      // audio: { fx: { walk_key: "dirt_footstep" } },
    });
  }
  preload() {
    super.preload();
  }
  async create() {
    this.map = this.make.tilemap({
      key: "festival_of_colors",
    });

    super.create();

    // this.initialiseNPCs(NPCS);
  }
  public get portalService() {
    return this.registry.get("portalService") as MachineInterpreter | undefined;
  }
}
